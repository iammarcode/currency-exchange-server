export class ErrorCode {
    public static readonly Success = 'success'
    public static readonly InvalidParams = 'invalidParams'
    public static readonly Unauthenticated = 'unauthenticated'
    public static readonly NotFound = 'notFound'
    public static readonly UnknownError = 'unknownError'
}

export class ErrorStatus {
    public static readonly Success = 200
    public static readonly InvalidParams = 400
    public static readonly Unauthenticated = 401
    public static readonly NotFound = 404
    public static readonly UnknownError = 500
}
