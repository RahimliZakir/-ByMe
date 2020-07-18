using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MathOperationsConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            int inta, intb;

            Console.Write("1-ci elementi daxil edin");
            string a = Console.ReadLine();
            bool cavab1 = int.TryParse(a, out inta);
            if (cavab1 == false)
            {
                Console.WriteLine("Zehmet olmasa reqem va yaxud eded daxil edin");
            }
            Console.Write("2-ci elementi daxil edin");
            string b = Console.ReadLine();
            bool cavab2 = int.TryParse(b, out intb);

            if (cavab2 == false)
            {
                Console.WriteLine("Zehmet olmasa reqem va yaxud eded daxil edin");
            }

            

            
            int c = inta + intb;
            Console.WriteLine($"{inta}+{intb}={c}");

            Console.ReadKey();
        }
    }
}
