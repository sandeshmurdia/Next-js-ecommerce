import zipy from 'zipy-staging-nextjs';
export function randomfrontenderror() {
    const arr = [1, 2, 3, 4, 5,6];
    const randomIndex = Math.floor(Math.random() * arr.length);
    const status = arr[randomIndex];
  
    switch (status) {
      case 1:
          zipy.logException(new Error("Hello This is Eval Error"));
  
          throw  EvalError();
          
          
  
        
      case 2:
        zipy.logException(new Error("Hello This is a Range Error"));
  
          throw  RangeError();
  
      case 3:
          zipy.logException(new Error("Hello This is a Referemce Error"));
  
          throw  ReferenceError();
  
  
      case 4:
          zipy.logException(new SyntaxError("Hello This is a Syntax Error"));
  
          throw  SyntaxError();
  
  
      case 5:
          zipy.logException(new TypeError("Hello This is a Type Error"));
  
          throw  TypeError();
  
          case 6:
              zipy.logException(new URIError("Hello This is an URI Error"));
  
              throw URIError();
  
  
      default:
          throw  Error()
  
  }
  }