using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GetType____typeof____sizeof____default___ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {

            Type typeType = typeof(int);
            Console.WriteLine(typeType);

            Type elementType = true.GetType();
            Console.WriteLine(elementType);

            var typeSize = sizeof(char);
            Console.WriteLine(typeSize);

            var typeDefault = default(sbyte);
            Console.WriteLine(typeDefault);

            var Min = decimal.MinValue;
            var Max = decimal.MaxValue;
            Console.WriteLine($"{Min} ve {Max}");

            Console.ReadKey();

        }
    }
}
