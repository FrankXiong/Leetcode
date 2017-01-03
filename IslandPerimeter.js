/**
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
Grid cells are connected horizontally/vertically (not diagonally).
The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
The island doesn't have "lakes" (water inside that isn't connected to the water around the island).
One cell is a square with side length 1.
The grid is rectangular, width and height don't exceed 100.
Determine the perimeter of the island.

Example:

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16
Question URL: https://leetcode.com/problems/island-perimeter/
*/

/**
  Analysis:
    traverse two-dimensional grid,
    if cell is island, the perimeter plus 4
    if the cell has right neighbor, the perimeter minus 2
    if the cell has bottom neightbor, the perimeter minus 2
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    if(!grid || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    var result = 0;
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {
                result += 4;
                if(i < grid.length - 1 && grid[i+1][j] === 1) {
                    result -= 2;
                }
                if(j < grid[0].length - 1 && grid[i][j+1] === 1) {
                    result -= 2;
                }
            }
        }
    }
    return result;
};
