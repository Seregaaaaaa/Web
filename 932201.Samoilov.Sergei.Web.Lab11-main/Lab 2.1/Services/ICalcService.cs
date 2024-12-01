namespace Lab_2._1.Services
{
    public interface ICalcService
    {
        int First { get; }
        int Second { get; }

        int Sum();
        int Sub();
        int Mul();
        int Div();
    }
}
