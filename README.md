# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

My function determines if two graphs, specifically adjacency matrices, are isomorphic 
by generating permutations and then remapping the swapped vertices. As a result, I 
reused a lot of code from my brute-force sorting exercise. In the worst case, every 
permutation has to be checked. This algorithm swaps values on every iteration of the 
outer loop so that each swap generates a unique permutation. In total, the algorithm 
will generate $|V|!$ different mappings. After each swap is made, the algorithm iterates 
through each vertex and swaps the values in the array at the indices of the swapped vertices. 
After this, there is another while loop that will iterate at most $|V|$ times, which won't 
change the complexity. However, at the end of the outer while loop, the function checks for 
equality of the two graphs. Since, it has to check each value in the adjacency matrix, this 
will have a complexity of $|V|^2$ Since this is more significant than $|V|$, it will have an 
impact on the complexity. Therefore, this algorithm will have an asymptotic complexity of 
$\Theta(|V|^2 \cdot |V|!)$.

## Extra Help

As I mentioned earlier, I reused code from my brute-force sorting exercise to help me
with this one.

"I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice."
