/* Undefined is used as a placeholder for the variables when their address is assigned during the execution context
   PHASE 1  */

/* Not-defined is used for those elements of code which are not declared inside the code but we are still trying to 
   acess them */

/* Lexical environment is a combination of local memory of child function and the reference to parent function of a 
   child node
 */

/* Global Execution Context is created by js.engine at the time of compilation of the js code. Execution context has
   two phases PHASE 1 is memory allocation to variables and functions  PHASE 2 will be line by line execution of code
   Every time new, independent and nested sub Execution context is beign created at the time of function invocation or calling  */