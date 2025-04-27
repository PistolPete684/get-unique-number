function findUniq(arr) {
  // Check first instance against second and third instances; return if unique
  if (arr[0] !== arr[1] && arr[0] !== arr[2]) return arr[0];
   // Check second instance against first and third instances; return if unique
  if (arr[1] !== arr[0] && arr[1] !== arr[2]) return arr[1];
  
  // Use first instance to find the unique instance using .find()
  return arr.find(num => num !== arr[0]);
}
