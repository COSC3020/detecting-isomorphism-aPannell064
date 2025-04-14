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

## Explanation of Algorithm

This algorithm generates all permutations of the graph. It does so by breaking it 
down into smaller parts. It generates all unique permutations for the first two elements, 
then swaps the first and third elements. Now that there is a new pair of elements at the front, 
it can then repeat the last two steps until all permutations are created for a trio of elements. 
Once that is done it can swap one of those three elements with the fourth one. The algorithm then 
repeats over and over again and builds up progressively until it has generated all permutations for 
n elements. 

The swaps array has two purposes. The first one is as a counter that counts the amount of times each 
element is swapped. The while loop at the end of the outer loop resets values accordingly when they 
exceed the maximum amount of swaps that have to be done at that index before moving on to the next one. 
When the last element is reached and the counter is full at that index, i will be greater than v and the 
loop will terminate. The second purpose is to handle an error that occurs when generating permutations for 
a set of even elements. If the elements at index 0 and i are always swapped, then the algorithm will skip 
some permutations and will start repeating some. The solution is that when an odd index is reached, it 
swaps the element at that index with the first element the first time, the second element the second 
time and so on. Because swaps is used as a counter, it can be used to implement this solution. 

Additionally, while I feel like I have a pretty good understanding of how this algorithm works, 
I would like to reiterate that I reused the algorithm from my brute-force sorting exercise. In 
that exercise I explicitly state that this algorithm is based on pseudocode of an iterative 
version of Heap's Algorithm found on https://en.wikipedia.org/wiki/Heap%27s_algorithm. I made 
a few changes that allowed me to have a better understanding of how it works. Originally, I 
did not include that in this file because I felt it would be redundant, but I do not want to 
give the wrong impression, so I am including it here now. 

## Extra Help

As I mentioned earlier, I reused code from my brute-force sorting exercise to help me
with this one. I used an implementation of heap's algorithm found on 
https://en.wikipedia.org/wiki/Heap%27s_algorithm in that excercise. As a result, it 
also helped with this one. 

"I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice."
