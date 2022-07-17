class Main {
    static int N = 8;
    static int[][] board = new int[N][N];

    static void printMatrix(int[][] board) {
        // int count = 0;
        // for (int i = 0; i < board.length; i++) {
        //     for (int j = 0; j < board[i].length; j++) {
        //         System.out.print(board[i][j] + " ");
        //         if (board[i][j] == 1)
        //             count++;
        //     }
        //     System.out.println();
        // }
        System.out.println();
        char[][] board2 = new char[N][N];
        for (int i = 0; i < board2.length; i++) {
            for (int j = 0; j < board2.length; j++) {
                if(board[i][j] == 0){
                    // board2[i][j]=' ';
                    System.out.print("e ");
                }else{
                    // board2[i][j]='Q';
                    System.out.print("Q ");
                }
            }
            System.out.println();
        }
        System.out.println();
        // System.out.println("Number of Queens : " + count);
    }

    static boolean solve() {
        if (solveRec(0) == false) {
            return false;
        } else {
            // printMatrix(board);
            return true;
        }
    }

    static boolean solveRec(int col) {
        if (col == N)
            return true;
        for (int i = 0; i < N; i++) {
            if (isSafe(i, col)) {
                board[i][col] = 1;
                printMatrix(board);
                if (solveRec(col + 1)) {
                    return true;
                }
                board[i][col] = 0;
            }
        }
        return false;
    }

    static boolean isSafe(int row, int col) {
        for (int i = 0; i < col; i++) {
            if (board[row][i] == 1)
                return false;
        }
        for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 1) {
                return false;
            }
        }
        for (int i = row, j = col; j >= 0 && i < N; i++, j--) {
            if (board[i][j] == 1) {
                return false;
            }
        }
        return true;

    }

    public static void main(String[] args) {
        solve();
    }
}