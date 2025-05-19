using System.Runtime.Serialization;

namespace WisVestAPI.Constants
{

    public static class ResponseMessages
    {
        public const string NullUserInput = "User input cannot be null.";
        public const string AllocationComputationFailed = "Allocation could not be computed or formatted correctly.";
        public const string AllocationFormatError = "Error: Final allocation data format is incorrect.";
        public const string NoCalculatedAllocationsFound = "No calculated allocations found.";
        public const string ErrorRetrievingAllocations = "An error occurred while retrieving the calculated allocations: ";


        public const string EmailAlreadyExists = "Email already exists.";
        public const string RegistrationSuccess = "Registration successful.";
        public const string LoginSuccess = "Login successful.";
        public const string InvalidCredentials = "Invalid credentials.";
        public const string LoginError = "An error occurred during login.";
        public const string RegistrationError = "An error occurred during registration.";
        public const string ProductAllocationsFetchError = "An error occurred while retrieving product allocations.";
        public const string AllocationResultNull = "Allocation result cannot be null.";
        public const string TargetAmountInvalid = "Target amount must be greater than zero.";
        public const string HorizonInvalid = "Investment horizon must be greater than zero.";
        public const string NoProductAllocationsFound = "No product allocations found.";
        public const string ProductAllocationCalculationError = "Error occurred while calculating product allocations.";

        public const string ProductJsonNotFound = "Product JSON file not found at path: ";
        public const string ProductJsonDeserializationFailed = "Failed to deserialize product data. Ensure the JSON structure is correct.";
        public const string JsonReadError = "Error reading product JSON file.";
        public const string UnexpectedError = "An unexpected error occurred while loading products.";
        public const string NullInput = "User input cannot be null.";
        public const string InternalServerError = "An unexpected error occurred while processing user input.";




        public const string InvalidPercentageSplit = "Percentage split must be between 1 and 100.";
        public const string InvalidTargetAmount = "Target amount must be greater than zero.";
        public const string InvalidAnnualReturn = "Annual return cannot be negative.";
        public const string InvalidInvestmentHorizon = "Investment horizon cannot be negative or zero.";
        public const string DenominatorZero = "Denominator in investment calculation is zero.";

        public const string CalculationStarted = "Calculating investment amount with PercentageSplit: {PercentageSplit}, TargetAmount: {TargetAmount}, AnnualReturn: {AnnualReturn}, InvestmentHorizon: {InvestmentHorizon}.";
        public const string CalculationCompleted = "Calculated investment amount: {InvestmentAmount}.";

        public const string InvalidInputLog = "Invalid input detected: {Message}";
        public const string InvalidInputError = "Error processing input parameters";

        public const string DivideByZeroLog = "Mathematical error encountered: {Message}";
        public const string DivideByZeroError = "Investment calculation failed due to divide by zero.";

        public const string OverflowLog = "Overflow error detected: {Message}";
        public const string OverflowError = "Calculation resulted in an overflow error.";

        public const string UnexpectedErrorLog = "Unexpected error occurred: {Message}";
        // public const string UnexpectedError = "An unexpected error occurred during investment calculation.";




        public const string InputCannotBeNull = "User input cannot be null.";
        public const string AllocationCalculationFailed = "Allocation calculation failed.";
        public const string AllocationCalculationError = "Error during allocation calculation.";
        public const string AllocationProcessingError = "Error while processing allocation.";
        public const string SerializationError = "Error while serializing result.";
        public const string InvalidDictionaryCast = "Value for key '{0}' is not a valid Dictionary<string, double>.";



        public const string UserFilePathNotConfigured = "UserFilePath is not configured in appsettings.json.";
        public const string FileAccessDenied = "Access denied to the file at {0}.";
        public const string FileReadError = "An I/O error occurred while reading the file at {0}.";
        public const string FileWriteError = "An I/O error occurred while writing to the file at {0}.";
        public const string InvalidJson = "The file at {0} contains invalid JSON.";
        public const string JsonSerializationError = "Failed to serialize the user data to JSON.";
        public const string UserExistsCheckFailed = "Failed to check if the user with email {0} exists.";
        public const string UserRetrievalFailed = "Failed to retrieve the user with email {0}.";
        public const string UserAddFailed = "Failed to add the user with email {0}.";
        public const string UserUpdateFailed = "Failed to update the user with ID {0}.";
        public const string UserNotFound = "User with ID {0} was not found.";
        public const string UserValidationFailed = "Failed to validate login for the user with email {0}.";





        public const string AllocationSuccess = "Product allocation successful.";
        public const string AppSettingsNull = "AppSettings section is missing in configuration.";
        public const string ProductDataNull = "Product data is null or empty.";
        public const string AllocationError = "Error occurred while calculating product allocation.";

        public static SerializationInfo SaveAllocationFailure { get; internal set; }


        public const string StartingAllocation = "Starting product allocation calculation.";
        public const string NoProductsFound = "No products found for {Asset} -> {SubAsset}";
        public const string TotalReturnsZero = "Total returns for {SubAsset} is zero or negative.";
        public const string SavingAllocations = "Product allocations saved to {Path}";
        public const string NoOutputFile = "No output file found at {Path}.";
        public const string ProductDataNotFound = "Product data not found for {Asset} -> {SubAsset}";

        // Exception messages
        public const string ProductFileNotFound = "Product JSON file not found.";
        public const string ProductDataNull1 = "Product JSON deserialization returned null.";
        public const string AllocationFailure = "Failed to calculate product allocations.";
        public const string LoadProductFailure = "Unable to load product data from JSON file.";
        public const string SaveAllocationFailure1 = "Unable to write product allocations to file.";
        public const string ReadAllocationFailure = "Unable to load product allocation results.";
        public const string ProductFetchError = "Error fetching products.";


        public const string find = "JwtSettings:SecretKey";

    }

}