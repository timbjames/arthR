using arthr.Utils.Attributes;

namespace arthr.Utils.Exceptions.Interfaces
{
    public interface IHttpExceptionResponse : IReportableException
    {
        ExceptionResponseType GetExceptionResponseType();
    }
}
