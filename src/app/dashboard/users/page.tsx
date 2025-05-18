"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ContactPerson {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
}

interface Organization {
  id?: string;
  name: string;
  logo?: string | null;
  contactPersons?: ContactPerson[];
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  ticketCount: number;
  twoFactorEnabled?: boolean;
  organization?: Organization | null;
}

export default function UsersPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  // User form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    role: "USER",
    twoFactorEnabled: false,
    organization: {
      name: "",
      logo: ""
    },
    contactPersons: [{ name: "", email: "", phoneNumber: "" }]
  });
  
  // Contact person modal states
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState<Organization | null>(null);
  const [contactPersons, setContactPersons] = useState<ContactPerson[]>([]);
  const [newContactPerson, setNewContactPerson] = useState<ContactPerson>({ 
    name: "", 
    email: "", 
    phoneNumber: "" 
  });
  
  const userRole = session?.user?.role;

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      // Check if the user has the required role
      if (userRole !== "ADMIN") {
        setError("You don't have permission to view this page. Only administrators can manage users.");
        setIsLoading(false);
        // Don't redirect immediately - let the user see the error
        // router.push("/dashboard");
        return;
      }
      
      fetchUsers();
    }
  }, [status, router, userRole]);
  
  const fetchUsers = async () => {
    try {
      setError(""); // Clear any previous errors
      
      let userData: User[] = [];
      try {
        const response = await fetch("/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          userData = await response.json();
        } else {
          console.error("API returned an error:", response.status);
          setError(`Failed to load users. Server returned: ${response.status}`);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to connect to the users API. Please try again later.");
      }
      
      setUsers(userData);
    } catch (error) {
      console.error("Error in fetchUsers:", error);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleOrganizationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      organization: {
        ...prev.organization,
        [name]: value
      }
    }));
  };
  
  const handleContactPersonChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newContactPersons = [...formData.contactPersons];
    newContactPersons[index] = { ...newContactPersons[index], [name]: value };
    
    setFormData((prev) => ({
      ...prev,
      contactPersons: newContactPersons
    }));
  };
  
  const addContactPerson = () => {
    setFormData((prev) => ({
      ...prev,
      contactPersons: [...prev.contactPersons, { name: "", email: "", phoneNumber: "" }]
    }));
  };
  
  const removeContactPerson = (index: number) => {
    const newContactPersons = [...formData.contactPersons];
    newContactPersons.splice(index, 1);
    
    setFormData((prev) => ({
      ...prev,
      contactPersons: newContactPersons
    }));
  };
  
  const openAddModal = () => {
    setFormData({
      id: "",
      name: "",
      email: "",
      password: "",
      role: "USER",
      twoFactorEnabled: false,
      organization: {
        name: "",
        logo: ""
      },
      contactPersons: [{ name: "", email: "", phoneNumber: "" }]
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };
  
  const openEditModal = (user: User) => {
    const contactPersons = user.organization?.contactPersons || [];
    
    setFormData({
      id: user.id,
      name: user.name,
      email: user.email,
      password: "", // Don't include password when editing
      role: user.role,
      twoFactorEnabled: user.twoFactorEnabled ?? false,
      organization: {
        name: user.organization?.name || "",
        logo: user.organization?.logo || ""
      },
      contactPersons: contactPersons.length > 0 
        ? contactPersons.map(c => ({ name: c.name, email: c.email, phoneNumber: c.phoneNumber }))
        : [{ name: "", email: "", phoneNumber: "" }]
    });
    setIsEditing(true);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Prepare data for API
      const apiData: any = {
        name: formData.name,
        email: formData.email,
        role: formData.role,
        twoFactorEnabled: formData.twoFactorEnabled
      };
      
      // Only include password if provided (for edits) or required (for new users)
      if (formData.password) {
        apiData.password = formData.password;
      } else if (!isEditing) {
        setError("Password is required for new users");
        return;
      }
      
      // Add organization data if role is USER
      if (formData.role === "USER") {
        if (!formData.organization.name) {
          setError("Organization name is required for users with USER role");
          return;
        }
        
        apiData.organization = {
          name: formData.organization.name,
          logo: formData.organization.logo || null
        };
        
        // Add contact persons if any are valid
        const validContactPersons = formData.contactPersons.filter(
          cp => cp.name && cp.email && cp.phoneNumber
        );
        
        if (validContactPersons.length > 0) {
          apiData.contactPersons = validContactPersons;
        }
      }
      
      let response;
      
      if (isEditing) {
        // Update existing user
        response = await fetch(`/api/users/${formData.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiData),
        });
      } else {
        // Create new user
        response = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiData),
        });
      }
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save user");
      }
      
      // Success
      setSuccessMessage(isEditing ? "User updated successfully" : "User created successfully");
      closeModal();
      fetchUsers(); // Refresh the user list
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      
    } catch (error) {
      console.error("Error saving user:", error);
      setError(error instanceof Error ? error.message : "Failed to save user");
    }
  };
  
  const handleDeleteUser = async (userId: string) => {
    if (window.confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
      try {
        const response = await fetch(`/api/users/${userId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to delete user");
        }
        
        setSuccessMessage("User deleted successfully");
        fetchUsers(); // Refresh the user list
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
        
      } catch (error) {
        console.error("Error deleting user:", error);
        setError(error instanceof Error ? error.message : "Failed to delete user");
      }
    }
  };

  const openContactModal = (user: User) => {
    if (user.organization) {
      setSelectedOrganization(user.organization);
      setContactPersons(user.organization.contactPersons || []);
      setIsContactModalOpen(true);
    }
  };
  
  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setSelectedOrganization(null);
    setContactPersons([]);
    setNewContactPerson({ name: "", email: "", phoneNumber: "" });
  };
  
  const handleNewContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewContactPerson((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const addNewContactPerson = async () => {
    if (!selectedOrganization?.id) return;
    
    if (!newContactPerson.name || !newContactPerson.email || !newContactPerson.phoneNumber) {
      setError("All contact fields are required");
      return;
    }
    
    try {
      const response = await fetch(`/api/organizations/${selectedOrganization.id}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContactPerson),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to add contact person");
      }
      
      const newContact = await response.json();
      
      // Update the contact persons list
      setContactPersons((prev) => [...prev, newContact]);
      
      // Reset the form
      setNewContactPerson({ name: "", email: "", phoneNumber: "" });
      
      // Show success message
      setSuccessMessage("Contact person added successfully");
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      
      // Refresh the user list to update UI
      fetchUsers();
    } catch (error) {
      console.error("Error adding contact person:", error);
      setError(error instanceof Error ? error.message : "Failed to add contact person");
    }
  };
  
  const deleteContactPerson = async (contactId: string) => {
    if (!selectedOrganization?.id) return;
    
    if (window.confirm("Are you sure you want to delete this contact person?")) {
      try {
        const response = await fetch(`/api/organizations/${selectedOrganization.id}/contacts/${contactId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to delete contact person");
        }
        
        // Remove contact from the list
        setContactPersons((prev) => prev.filter(contact => contact.id !== contactId));
        
        // Show success message
        setSuccessMessage("Contact person deleted successfully");
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
        
        // Refresh user list to update UI
        fetchUsers();
      } catch (error) {
        console.error("Error deleting contact person:", error);
        setError(error instanceof Error ? error.message : "Failed to delete contact person");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-incite-navy"></div>
      </div>
    );
  }

  const getRoleBadgeClass = (role: string) => {
    switch (role) {
      case "ADMIN":
        return "bg-incite-red text-white";
      case "EMPLOYEE":
        return "bg-incite-navy text-white";
      case "USER":
        return "bg-gray-200 text-gray-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Manage Users</h1>
        <button 
          className="bg-incite-navy hover:bg-blue-950 text-white px-4 py-2 rounded transition-colors"
          onClick={openAddModal}
        >
          Add New User
        </button>
      </div>
      
      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
      
      {successMessage && (
        <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
          <p className="text-green-700 text-sm">{successMessage}</p>
        </div>
      )}

      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Organization
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Joined
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tickets
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-incite-navy rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                          {user.twoFactorEnabled && (
                            <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                              2FA
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">ID: {user.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleBadgeClass(
                        user.role
                      )}`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.organization ? (
                      <div 
                        className="flex items-center cursor-pointer hover:bg-gray-100 p-1 rounded"
                        onClick={() => openContactModal(user)}
                      >
                        {user.organization.logo ? (
                          <div className="h-8 w-8 mr-2">
                            <img 
                              src={user.organization.logo} 
                              alt={`${user.organization.name} logo`} 
                              className="h-8 w-8 object-contain" 
                            />
                          </div>
                        ) : (
                          <div className="h-8 w-8 bg-gray-200 rounded mr-2 flex items-center justify-center">
                            <span className="text-xs">{user.organization.name.charAt(0)}</span>
                          </div>
                        )}
                        <div>
                          <div className="text-sm text-gray-900">{user.organization.name}</div>
                          <div className="text-xs text-gray-500">
                            {user.organization.contactPersons && user.organization.contactPersons.length > 0 
                              ? `${user.organization.contactPersons.length} contact(s) • Click to view` 
                              : 'No contacts • Click to add'}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.ticketCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button 
                        className="text-incite-navy hover:text-incite-red"
                        onClick={() => openEditModal(user)}
                      >
                        Edit
                      </button>
                      {user.role !== "ADMIN" && (
                        <button 
                          className="text-incite-red hover:text-red-800"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* User Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {isEditing ? "Edit User" : "Add New User"}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Basic User Info */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password {!isEditing && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required={!isEditing}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                    placeholder={isEditing ? "Leave blank to keep current password" : "Enter password"}
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                  >
                    <option value="USER">User (Client)</option>
                    <option value="EMPLOYEE">Employee (Support Staff)</option>
                    <option value="ADMIN">Administrator</option>
                  </select>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="twoFactorEnabled"
                    name="twoFactorEnabled"
                    checked={formData.twoFactorEnabled}
                    onChange={(e) => setFormData({...formData, twoFactorEnabled: e.target.checked})}
                    className="h-4 w-4 text-incite-navy focus:ring-incite-navy border-gray-300 rounded"
                  />
                  <label htmlFor="twoFactorEnabled" className="ml-2 block text-sm text-gray-700">
                    Enable Two-Factor Authentication
                  </label>
                  <span className="ml-2 text-xs text-gray-500">(User will need to enter an email OTP during login)</span>
                </div>
                
                {/* Organization Info - Show only for USER role */}
                {formData.role === "USER" && (
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h4 className="text-md font-medium text-gray-800 mb-3">Organization Details</h4>
                    
                    <div>
                      <label htmlFor="organization-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Organization Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="organization-name"
                        name="name"
                        value={formData.organization.name}
                        onChange={handleOrganizationChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                      />
                    </div>
                    
                    <div className="mt-3">
                      <label htmlFor="organization-logo" className="block text-sm font-medium text-gray-700 mb-1">
                        Logo URL <span className="text-xs text-gray-500">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="organization-logo"
                        name="logo"
                        value={formData.organization.logo || ""}
                        onChange={handleOrganizationChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                        placeholder="https://example.com/logo.png"
                      />
                    </div>
                    
                    {/* Contact Persons */}
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="text-sm font-medium text-gray-800">Contact Persons</h5>
                        <button
                          type="button"
                          onClick={addContactPerson}
                          className="text-xs bg-incite-navy text-white px-2 py-1 rounded"
                        >
                          + Add Contact
                        </button>
                      </div>
                      
                      {formData.contactPersons.map((contact, index) => (
                        <div key={index} className="border border-gray-200 rounded p-3 mb-3">
                          <div className="flex justify-between items-center mb-2">
                            <h6 className="text-sm font-medium">Contact #{index + 1}</h6>
                            {formData.contactPersons.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeContactPerson(index)}
                                className="text-xs text-red-600"
                              >
                                Remove
                              </button>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div>
                              <label htmlFor={`contact-name-${index}`} className="block text-xs text-gray-700 mb-1">
                                Name
                              </label>
                              <input
                                type="text"
                                id={`contact-name-${index}`}
                                name="name"
                                value={contact.name}
                                onChange={(e) => handleContactPersonChange(index, e)}
                                className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-incite-navy"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor={`contact-email-${index}`} className="block text-xs text-gray-700 mb-1">
                                Email
                              </label>
                              <input
                                type="email"
                                id={`contact-email-${index}`}
                                name="email"
                                value={contact.email}
                                onChange={(e) => handleContactPersonChange(index, e)}
                                className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-incite-navy"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor={`contact-phone-${index}`} className="block text-xs text-gray-700 mb-1">
                                Phone
                              </label>
                              <input
                                type="text"
                                id={`contact-phone-${index}`}
                                name="phoneNumber"
                                value={contact.phoneNumber}
                                onChange={(e) => handleContactPersonChange(index, e)}
                                className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-incite-navy"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-end space-x-2 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-incite-navy text-white rounded-md hover:bg-blue-950"
                  >
                    {isEditing ? "Update" : "Create"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Contact Persons Modal */}
      {isContactModalOpen && selectedOrganization && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {selectedOrganization.name} - Contact Persons
              </h3>
              <button
                onClick={closeContactModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Success/Error Messages */}
            {error && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
            
            {successMessage && (
              <div className="mb-4 bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                <p className="text-green-700 text-sm">{successMessage}</p>
              </div>
            )}
            
            {/* Existing Contact Persons List */}
            <div className="mb-6">
              <h4 className="text-md font-medium text-gray-800 mb-3">Existing Contacts</h4>
              
              {contactPersons.length === 0 ? (
                <p className="text-sm text-gray-500 italic">No contact persons found.</p>
              ) : (
                <div className="space-y-3">
                  {contactPersons.map((contact) => (
                    <div 
                      key={contact.id} 
                      className="flex justify-between items-center border border-gray-200 rounded p-3"
                    >
                      <div>
                        <div className="font-medium">{contact.name}</div>
                        <div className="text-sm text-gray-500">
                          <div>{contact.email}</div>
                          <div>{contact.phoneNumber || 'No phone number'}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => contact.id && deleteContactPerson(contact.id)}
                        className="text-incite-red hover:text-red-800 ml-4"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Add New Contact Person Form */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-md font-medium text-gray-800 mb-3">Add New Contact</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="new-contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="new-contact-name"
                    name="name"
                    value={newContactPerson.name}
                    onChange={handleNewContactChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="new-contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="new-contact-email"
                    name="email"
                    value={newContactPerson.email}
                    onChange={handleNewContactChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="new-contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="new-contact-phone"
                    name="phoneNumber"
                    value={newContactPerson.phoneNumber}
                    onChange={handleNewContactChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <button
                  type="button"
                  onClick={addNewContactPerson}
                  className="bg-incite-navy hover:bg-blue-950 text-white px-4 py-2 rounded transition-colors"
                >
                  Add Contact
                </button>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={closeContactModal}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 