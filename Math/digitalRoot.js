let n = 493193;

function digital_root2(n) { return ((n - 1) % 9) + 1; //it fails when the
input number is a multiple of 9. } console.log(digital_root2(n)); console.log
(digital_root2(16));

/*
 We can first sequentially write down the every sum in the middle steps to see
 what happens: suppose there is a three-digit number, say 327. First term is
 327, second term is 3+2+7=12, third one is 1+2=3 and done. Now if you see
 all the differences between the two adjacent terms, you can find that they
 are all multiples of nine. What is common among the three terms is that
 their remainders when divided by nine are the same. Therefore, the whole
 problem can be viewed as finding the remainder of input number when divided
 by nine, except for multiples of nine as input. In that case the digital
 root would turn out to be zero, which is fixed by first subtracting 1 from n
 and then adding 1 back after %9 operation.

*/
