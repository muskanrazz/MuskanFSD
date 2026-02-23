import java.util.*;
public class Main {
    public static void main(String[] args) {
      Scanner sc= new Scanner(System.in);
      int n = sc.nextInt();
      printTriangle(n);
      printLeftPyramid(n);
      printOppositeTriangle(n);
      printRightTriangle(n);
      printDiamondTriangle(n);
      printSquarePattern(n);
      printHollowPattern(n);
      printDia(n);
      printButterfly(n);
      printbinary(n);
    }
    public static void printTriangle(int n){
      for(int i=1; i<=n; i++){
        for(int j=1; j<=n-i; j++){
          System.out.print(" ");
        }
        for(int j=1; j<=2*i-1; j++){
          System.out.print("*");
        }
        System.out.println();
      }
    }
    public static void  printLeftPyramid(int n){
      for(int i=1; i<=n; i++){
        for(int j=1; j<=i; j++){
          System.out.print("*");
        }
         System.out.println();
      }
    }
    
     public static void printOppositeTriangle(int n){
      for(int i=n; i>=1; i--){
        for(int j=1; j<=n-i; j++){
          System.out.print(" ");
        }
        for(int j=1; j<=2*i-1; j++){
          System.out.print("*");
        }
        System.out.println();
      }
    }
     public static void  printRightTriangle(int n){
      for(int i=1; i<=n; i++){
        for(int j=1; j<=n-i; j++){
          System.out.print(" ");
        }
         for(int j=1; j<=i; j++){
          System.out.print("*");
         }
         System.out.println();
      }
    }
     public static void printDiamondTriangle(int n){
      for(int i=1; i<=n; i++){
        for(int j=1; j<=n-i; j++){
          System.out.print(" ");
        }
        for(int j=1; j<=2*i-1; j++){
          System.out.print("*");
        }
        System.out.println();
      }
      
      
      for(int i=n; i>=1; i--){
        for(int j=1; j<=n-i; j++){
          System.out.print(" ");
        }
        for(int j=1; j<=2*i-1; j++){
          System.out.print("*");
        }
        System.out.println();
      }
    }
    public static void  printSquarePattern(int n){
      for(int i=1; i<=n; i++){
        for(int j=1; j<=n; j++){
          System.out.print("*");
        }
         System.out.println();
      }
    }
    public static void printHollowPattern(int n){
      for(int i=1; i<=n; i++){
        for(int j=1; j<=n; j++){
          if(i==1 || i==n || j==1 || j==n){
            System.out.print("*");
          }
          else{
            System.out.print(" ");
          }
        }
        System.out.println();
      }
    }
    public static void printDia(int n){
      for(int i=n; i>=1; i--){
        for(int j=1; j<=i; j++){
          System.out.print("*");
        }
        for(int j=1; j<=2*(n-i); j++){
          System.out.print(" ");
        }
        for(int j=1; j<=i; j++){
          System.out.print("*");
        }
        System.out.println();
      }
    
    for(int i=1; i<=n; i++){
        for(int j=1; j<=i; j++){
          System.out.print("*");
        }
        for(int j=1; j<=2*(n-i); j++){
          System.out.print(" ");
        }
        for(int j=1; j<=i; j++){
          System.out.print("*");
        }
        System.out.println();
      }
    }
    public static void printButterfly(int n){
      for(int i=1; i<=n; i++){
        for(int j=1; j<=i; j++){
          System.out.print("*");
        }
        for(int j=1; j<=2*(n-i); j++){
          System.out.print(" ");
        }
        for(int j=1; j<=i; j++){
          System.out.print("*");
        }
        System.out.println();
      }
      for(int i=n-1; i>=1; i--){
        for(int j=1; j<=i; j++){
          System.out.print("*");
        }
        for(int j=1; j<=2*(n-i); j++){
          System.out.print(" ");
        }
        for(int j=1; j<=i; j++){
          System.out.print("*");
        }
        System.out.println();
      }
    }
    public static void printbinary(int n){
      int k=1;
      for(int i=1; i<=n; i++){
        for(int j=1; j<=i; j++){
            System.out.print(k++ +" ");
            //k=k+1;
          }
        System.out.println();
      }
    }
}