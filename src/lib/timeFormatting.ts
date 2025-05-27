/**
 * Format resolution time for display
 */
export function formatResolutionTime(hours: number | null): string {
  if (hours === null) return 'Not resolved';
  
  if (hours < 1) {
    const minutes = Math.round(hours * 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  }
  
  if (hours < 24) {
    const roundedHours = Math.round(hours * 10) / 10;
    return `${roundedHours} hour${roundedHours !== 1 ? 's' : ''}`;
  }
  
  const days = Math.floor(hours / 24);
  const remainingHours = Math.round((hours % 24) * 10) / 10;
  
  if (remainingHours === 0) {
    return `${days} day${days !== 1 ? 's' : ''}`;
  }
  
  return `${days} day${days !== 1 ? 's' : ''} ${remainingHours} hour${remainingHours !== 1 ? 's' : ''}`;
} 