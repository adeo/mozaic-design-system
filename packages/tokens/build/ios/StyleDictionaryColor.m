
//
// StyleDictionaryColor.m
//

#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.855f green:0.937f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.043f green:0.588f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.361f blue:0.569f alpha:1.000f],
[UIColor colorWithRed:0.922f green:0.961f blue:0.871f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.412f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.945f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.451f blue:0.082f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.208f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.918f blue:0.918f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.188f blue:0.176f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.000f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.502f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.302f green:0.302f blue:0.302f alpha:1.000f],
[UIColor colorWithRed:0.922f green:0.961f blue:0.871f alpha:1.000f],
[UIColor colorWithRed:0.773f green:0.890f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.816f blue:0.373f alpha:1.000f],
[UIColor colorWithRed:0.471f green:0.745f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.412f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.012f green:0.314f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.008f green:0.212f blue:0.094f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.937f blue:0.945f alpha:1.000f],
[UIColor colorWithRed:0.812f green:0.824f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.718f blue:0.757f alpha:1.000f],
[UIColor colorWithRed:0.561f green:0.580f blue:0.639f alpha:1.000f],
[UIColor colorWithRed:0.416f green:0.439f blue:0.506f alpha:1.000f],
[UIColor colorWithRed:0.286f green:0.310f blue:0.376f alpha:1.000f],
[UIColor colorWithRed:0.204f green:0.231f blue:0.298f alpha:1.000f],
[UIColor colorWithRed:0.141f green:0.161f blue:0.220f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.106f blue:0.149f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.600f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.502f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.302f green:0.302f blue:0.302f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.855f green:0.937f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.655f green:0.851f blue:0.929f alpha:1.000f],
[UIColor colorWithRed:0.451f green:0.765f blue:0.886f alpha:1.000f],
[UIColor colorWithRed:0.247f green:0.675f blue:0.843f alpha:1.000f],
[UIColor colorWithRed:0.043f green:0.588f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.482f blue:0.706f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.361f blue:0.569f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.227f blue:0.361f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.165f blue:0.255f alpha:1.000f],
[UIColor colorWithRed:0.922f green:0.961f blue:0.871f alpha:1.000f],
[UIColor colorWithRed:0.773f green:0.890f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.816f blue:0.373f alpha:1.000f],
[UIColor colorWithRed:0.471f green:0.745f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.412f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.012f green:0.314f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.008f green:0.212f blue:0.094f alpha:1.000f],
[UIColor colorWithRed:0.937f green:0.922f blue:0.996f alpha:1.000f],
[UIColor colorWithRed:0.780f green:0.690f blue:0.980f alpha:1.000f],
[UIColor colorWithRed:0.647f green:0.459f blue:0.953f alpha:1.000f],
[UIColor colorWithRed:0.533f green:0.231f blue:0.914f alpha:1.000f],
[UIColor colorWithRed:0.439f green:0.000f blue:0.867f alpha:1.000f],
[UIColor colorWithRed:0.345f green:0.012f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.259f green:0.020f blue:0.541f alpha:1.000f],
[UIColor colorWithRed:0.180f green:0.024f blue:0.388f alpha:1.000f],
[UIColor colorWithRed:0.110f green:0.020f blue:0.239f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.918f blue:0.918f alpha:1.000f],
[UIColor colorWithRed:0.973f green:0.737f blue:0.733f alpha:1.000f],
[UIColor colorWithRed:0.953f green:0.553f blue:0.549f alpha:1.000f],
[UIColor colorWithRed:0.937f green:0.373f blue:0.361f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.188f blue:0.176f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.000f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.325f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.945f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.973f green:0.824f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.957f green:0.698f blue:0.494f alpha:1.000f],
[UIColor colorWithRed:0.937f green:0.576f blue:0.290f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.451f blue:0.082f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.322f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.208f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.325f green:0.106f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.212f green:0.055f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.973f blue:0.886f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.922f blue:0.686f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.878f blue:0.490f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.839f blue:0.298f alpha:1.000f],
[UIColor colorWithRed:0.973f green:0.800f blue:0.110f alpha:1.000f],
[UIColor colorWithRed:0.788f green:0.635f blue:0.106f alpha:1.000f],
[UIColor colorWithRed:0.612f green:0.482f blue:0.094f alpha:1.000f],
[UIColor colorWithRed:0.439f green:0.337f blue:0.075f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.208f blue:0.051f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.918f blue:0.918f alpha:1.000f],
[UIColor colorWithRed:0.973f green:0.737f blue:0.733f alpha:1.000f],
[UIColor colorWithRed:0.953f green:0.553f blue:0.549f alpha:1.000f],
[UIColor colorWithRed:0.937f green:0.373f blue:0.361f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.188f blue:0.176f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.000f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.325f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.855f green:0.937f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.655f green:0.851f blue:0.929f alpha:1.000f],
[UIColor colorWithRed:0.451f green:0.765f blue:0.886f alpha:1.000f],
[UIColor colorWithRed:0.247f green:0.675f blue:0.843f alpha:1.000f],
[UIColor colorWithRed:0.043f green:0.588f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.482f blue:0.706f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.361f blue:0.569f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.227f blue:0.361f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.165f blue:0.255f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.945f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.973f green:0.824f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.957f green:0.698f blue:0.494f alpha:1.000f],
[UIColor colorWithRed:0.937f green:0.576f blue:0.290f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.451f blue:0.082f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.322f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.208f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.325f green:0.106f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.212f green:0.055f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.922f green:0.961f blue:0.871f alpha:1.000f],
[UIColor colorWithRed:0.773f green:0.890f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.816f blue:0.373f alpha:1.000f],
[UIColor colorWithRed:0.471f green:0.745f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.412f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.012f green:0.314f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.008f green:0.212f blue:0.094f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.412f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.412f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.412f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.416f green:0.439f blue:0.506f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.106f blue:0.149f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.106f blue:0.149f alpha:1.000f],
[UIColor colorWithRed:0.141f green:0.161f blue:0.220f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.000f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.000f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.000f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.412f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.773f green:0.890f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:0.012f green:0.314f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.922f green:0.961f blue:0.871f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.412f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.416f green:0.439f blue:0.506f alpha:1.000f],
[UIColor colorWithRed:0.416f green:0.439f blue:0.506f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.106f blue:0.149f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.812f green:0.824f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.937f blue:0.945f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.000f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.973f green:0.737f blue:0.733f alpha:1.000f],
[UIColor colorWithRed:0.325f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.918f blue:0.918f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.000f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.502f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.922f green:0.961f blue:0.871f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.502f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.286f green:0.310f blue:0.376f alpha:1.000f],
[UIColor colorWithRed:0.286f green:0.310f blue:0.376f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.286f green:0.310f blue:0.376f alpha:1.000f],
[UIColor colorWithRed:0.286f green:0.310f blue:0.376f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.043f green:0.588f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.416f green:0.439f blue:0.506f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.482f blue:0.706f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.322f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.773f green:0.890f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.600f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.502f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.043f green:0.588f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.012f green:0.314f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.325f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.012f green:0.314f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.600f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.412f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.412f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.012f green:0.314f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.286f green:0.310f blue:0.376f alpha:1.000f],
[UIColor colorWithRed:0.204f green:0.231f blue:0.298f alpha:1.000f],
[UIColor colorWithRed:0.204f green:0.231f blue:0.298f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.106f blue:0.149f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.000f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.000f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.325f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.855f green:0.937f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.043f green:0.588f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.482f blue:0.706f alpha:1.000f],
[UIColor colorWithRed:0.922f green:0.961f blue:0.871f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.945f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.451f blue:0.082f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.322f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.918f blue:0.918f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.188f blue:0.176f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.067f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.922f green:0.961f blue:0.871f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.922f green:0.961f blue:0.871f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.937f blue:0.945f alpha:1.000f],
[UIColor colorWithRed:0.812f green:0.824f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.937f blue:0.945f alpha:1.000f],
[UIColor colorWithRed:0.812f green:0.824f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.718f blue:0.757f alpha:1.000f],
[UIColor colorWithRed:0.812f green:0.824f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.416f green:0.439f blue:0.506f alpha:1.000f],
[UIColor colorWithRed:0.812f green:0.824f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.561f green:0.580f blue:0.639f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.043f green:0.588f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.451f blue:0.082f alpha:1.000f],
[UIColor colorWithRed:0.957f green:0.698f blue:0.494f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.600f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.600f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.937f blue:0.945f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.937f blue:0.945f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.812f green:0.824f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.302f green:0.302f blue:0.302f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.773f green:0.890f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.502f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.502f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.302f green:0.302f blue:0.302f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.502f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.816f blue:0.373f alpha:1.000f],
[UIColor colorWithRed:0.012f green:0.314f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:0.012f green:0.314f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.502f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.094f green:0.533f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.412f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.412f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.773f green:0.890f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:0.773f green:0.890f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.471f green:0.745f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.471f green:0.745f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.816f blue:0.373f alpha:1.000f],
[UIColor colorWithRed:0.302f green:0.302f blue:0.302f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.502f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.302f green:0.302f blue:0.302f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.098f blue:0.098f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.600f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.400f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.275f green:0.651f blue:0.063f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.902f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.502f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.773f green:0.890f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.302f green:0.302f blue:0.302f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
