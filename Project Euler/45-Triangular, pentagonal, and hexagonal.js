void Main()
{
    var pen = Pentagonals(100000);
    var hex = Hexagonals(100000);
 
    foreach(var n in Triangles()){
        if(pen.Contains(n) && hex.Contains(n) && n > 40755){
            Console.WriteLine(n);
            return;
        }
    }
}
 
IEnumerable<BigInteger> Triangles()
{
    for(BigInteger n = 1;;n++)
    {
        yield return (n * (n + 1) / 2); 
    }
}
 
HashSet<BigInteger> Pentagonals(int limit)
{
    HashSet<BigInteger> set = new HashSet<BigInteger>();
    for(BigInteger n = 1;n <= limit;n++)
    {
        set.Add(n * (3 *n - 1) / 2); 
    }
    return set;
}
 
HashSet<BigInteger> Hexagonals(int limit)
{
    HashSet<BigInteger> set = new HashSet<BigInteger>();
    for(BigInteger n = 1;n <= limit;n++)
    {
        set.Add(n * (2*n - 1)); 
    }
    return set;
}
