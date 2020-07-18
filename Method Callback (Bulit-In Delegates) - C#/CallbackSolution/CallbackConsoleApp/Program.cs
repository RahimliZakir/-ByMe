using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CallbackConsoleApp
    //Built-In Delegates (Method Callback)
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(CallBack(EdedVurulsunBesh));
            Console.ReadKey();
        }

        static int EdedVurulsunBesh(int eded1, int eded2)
        {
            return (eded1 + eded2) * 5;
        }

        //Əgər callback etdiyimiz method value return eləmirsə, Func<> yox, Action<> yazılır.
        static int CallBack(Func<int,int,int>BirMethod)
        {
            return 10 + (BirMethod(12, 8));
        }
    }
}
