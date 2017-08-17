namespace arthr.Utils.Exceptions.Interfaces
{
    using Enums;

    public interface IErrorCoded
    {
        #region Properties

        ErrorCode ErrorCode { get; }

        #endregion
    }
}
