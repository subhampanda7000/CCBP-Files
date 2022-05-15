package dharitri;
import java.util.*;
public class number_pattern {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Number: ");
		int n = sc.nextInt();
		for(int i = 0; i<=n; i++) {
			String	space = " ".repeat(n-i);
			System.out.print(space);
			
			for (int j=i; j>=1; j--) {  //printing left side
				System.out.print(j);
			}
			for (int j=2; j<=i; j++) { //printing right side
				System.out.print(j);
			}
			
			System.out.println();

		}
		
 }
}