function showSalary(arr, numAge) {
  return arr
    .filter(({age}) => age <= numAge)
    .map(arr => `${arr.name}, ${arr.balance}`)
    .join("\n")
}
