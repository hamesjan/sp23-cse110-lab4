## Part 2
1. Line 12 will print 3. This is because in the for loop, i is declared as a var so the scope extends to outside the for loop. Therefore, console.log(i) is able to print i, which will be 3 at the end of for loop.
2. Line 13 will print 150. This is because discountedPrice is also declared as a var so console.log can access the value outside the scope of the for loop.
3. Line 14 will print 150. This is because finalPrice is also declared as a var so console.log can access the value outside the scope of the for loop.
4. This function will return [ 50, 100, 150 ] because those are the discountedPrices appended to the discounted list in the for loop.
5. We get a ReferenceError because the console.log statement lies outside the scope of the i variable, which is defined with let whic has block scope.
6. We get a ReferenceError because the console.log statement lies outside the scope of the discountedPrice variable, which is defined with let whic has block scope.
7. 150 will be printed. Since finalPrice is defined within the function scope and the console.log statement lies within the same function, we can print it.
8. The function will return [ 50, 100, 150 ]. Since discounted is defined within the function scope and the return statement lies within the same function, we can print it.
9. We get a ReferenceError for referencing i outside of its scope.
10. The function will print 3 because length and the console.log statement lie within the same scope.
11. The function will return [ 50, 100, 150 ] beacuse the definition of discounted and the return statement lie within the same scope.
12. A. student['name']
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher']["name"] 
    E. student['courseLoad'][0] 

13. A. '32'. Integers map to their exact string representation
    B. 1. The - operator is used for subtraction and the '3' will be converted to a number. 
    C. 3. null maps to 0.
    D. '3null.' The + operator acts as a string concatenator.
    E. 4. True maps to 1 in this addition.
    F. 0. Both values map to 0.
    G. '3undefined'. The + operator acts as a string concatenator.
    H. NaN. You can not subtract with undefined.
14. A. True. Strings convert to their integer counterparts.
    B. False. '12' is not greater than '2' lexicographically.
    C. True. 2 maps to its exact string representation which is equal to '2'.
    D. False. === checks for equality of type as well, since one is an integer and one is a string, they are not equal.
    E. False. True is equal to 1 and 1 != 2.
    F. True. Boolean(2) will map to 1.
15. == does not check for equality of type but === does.
16. Done
17. This function will result in [2, 4, 6]. This is because we pass in the list [1, 2, 3] and the callback doSomething, which takes a number and returns the same number multiplied by 2. The original modifyArray function takes the original array and iterates through it, appending each member of the list after going through the callback function, or doSomething, to the new array. After iterating through the whole list, we return newArray, which will contain each member of the original list multiplied by two.
18. Done.
19. 1, 4, 3, 2