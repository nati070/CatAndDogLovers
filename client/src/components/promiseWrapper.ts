
const promiseWrapper = (promise: Promise<any>) => {
    let status: string = "pending";
    let result: any;
    const s = promise.then(
      (value) => {
        status = "success";
        result = value;
      },
      (error) => {
        status = "error";
        result = error;
      }
    );
    return () => {
      switch (status) {
        case "pending":
          throw s;
        case "success":
          return result;
        case "error":
          throw result;
        default:
          throw new Error("Unknown status");
      }
    };
  };
  
  export default promiseWrapper