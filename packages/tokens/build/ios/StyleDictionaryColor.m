
//
// StyleDictionaryColor.m
//

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
[UIColor colorWithRed:0.92f green:0.95f blue:0.89f alpha:1.00f],
[UIColor colorWithRed:0.80f green:0.89f blue:0.71f alpha:1.00f],
[UIColor colorWithRed:0.68f green:0.84f blue:0.52f alpha:1.00f],
[UIColor colorWithRed:0.57f green:0.78f blue:0.33f alpha:1.00f],
[UIColor colorWithRed:0.47f green:0.75f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.25f green:0.63f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:0.08f green:0.51f blue:0.06f alpha:1.00f],
[UIColor colorWithRed:0.04f green:0.38f blue:0.11f alpha:1.00f],
[UIColor colorWithRed:0.02f green:0.24f blue:0.12f alpha:1.00f],
[UIColor colorWithRed:0.86f green:0.93f blue:0.92f alpha:1.00f],
[UIColor colorWithRed:0.65f green:0.82f blue:0.80f alpha:1.00f],
[UIColor colorWithRed:0.43f green:0.71f blue:0.68f alpha:1.00f],
[UIColor colorWithRed:0.22f green:0.58f blue:0.56f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.46f blue:0.45f alpha:1.00f],
[UIColor colorWithRed:0.01f green:0.37f blue:0.39f alpha:1.00f],
[UIColor colorWithRed:0.02f green:0.30f blue:0.33f alpha:1.00f],
[UIColor colorWithRed:0.02f green:0.23f blue:0.27f alpha:1.00f],
[UIColor colorWithRed:0.02f green:0.17f blue:0.21f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.83f green:0.82f blue:0.84f alpha:1.00f],
[UIColor colorWithRed:0.73f green:0.71f blue:0.74f alpha:1.00f],
[UIColor colorWithRed:0.63f green:0.61f blue:0.64f alpha:1.00f],
[UIColor colorWithRed:0.53f green:0.50f blue:0.53f alpha:1.00f],
[UIColor colorWithRed:0.44f green:0.40f blue:0.42f alpha:1.00f],
[UIColor colorWithRed:0.33f green:0.31f blue:0.32f alpha:1.00f],
[UIColor colorWithRed:0.24f green:0.22f blue:0.22f alpha:1.00f],
[UIColor colorWithRed:0.13f green:0.13f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.00f blue:0.00f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.99f blue:0.99f alpha:1.00f],
[UIColor colorWithRed:0.72f green:0.93f blue:0.96f alpha:1.00f],
[UIColor colorWithRed:0.52f green:0.86f blue:0.92f alpha:1.00f],
[UIColor colorWithRed:0.33f green:0.77f blue:0.87f alpha:1.00f],
[UIColor colorWithRed:0.15f green:0.66f blue:0.82f alpha:1.00f],
[UIColor colorWithRed:0.13f green:0.51f blue:0.66f alpha:1.00f],
[UIColor colorWithRed:0.12f green:0.37f blue:0.51f alpha:1.00f],
[UIColor colorWithRed:0.09f green:0.25f blue:0.36f alpha:1.00f],
[UIColor colorWithRed:0.06f green:0.15f blue:0.22f alpha:1.00f],
[UIColor colorWithRed:0.94f green:0.92f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.78f green:0.69f blue:0.98f alpha:1.00f],
[UIColor colorWithRed:0.65f green:0.46f blue:0.95f alpha:1.00f],
[UIColor colorWithRed:0.53f green:0.23f blue:0.91f alpha:1.00f],
[UIColor colorWithRed:0.44f green:0.00f blue:0.87f alpha:1.00f],
[UIColor colorWithRed:0.35f green:0.01f blue:0.70f alpha:1.00f],
[UIColor colorWithRed:0.26f green:0.02f blue:0.54f alpha:1.00f],
[UIColor colorWithRed:0.18f green:0.02f blue:0.39f alpha:1.00f],
[UIColor colorWithRed:0.11f green:0.02f blue:0.24f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.93f blue:0.93f alpha:1.00f],
[UIColor colorWithRed:0.98f green:0.73f blue:0.74f alpha:1.00f],
[UIColor colorWithRed:0.95f green:0.53f blue:0.54f alpha:1.00f],
[UIColor colorWithRed:0.92f green:0.36f blue:0.35f alpha:1.00f],
[UIColor colorWithRed:0.87f green:0.22f blue:0.17f alpha:1.00f],
[UIColor colorWithRed:0.71f green:0.16f blue:0.15f alpha:1.00f],
[UIColor colorWithRed:0.55f green:0.13f blue:0.15f alpha:1.00f],
[UIColor colorWithRed:0.39f green:0.11f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.24f green:0.07f blue:0.10f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.96f blue:0.92f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.85f blue:0.70f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.76f blue:0.49f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.67f blue:0.29f alpha:1.00f],
[UIColor colorWithRed:0.99f green:0.59f blue:0.12f alpha:1.00f],
[UIColor colorWithRed:0.78f green:0.44f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.59f green:0.31f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.42f green:0.21f blue:0.11f alpha:1.00f],
[UIColor colorWithRed:0.25f green:0.12f blue:0.08f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.97f blue:0.89f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.92f blue:0.69f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.88f blue:0.49f alpha:1.00f],
[UIColor colorWithRed:0.99f green:0.84f blue:0.30f alpha:1.00f],
[UIColor colorWithRed:0.97f green:0.80f blue:0.11f alpha:1.00f],
[UIColor colorWithRed:0.79f green:0.64f blue:0.11f alpha:1.00f],
[UIColor colorWithRed:0.61f green:0.48f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:0.44f green:0.34f blue:0.07f alpha:1.00f],
[UIColor colorWithRed:0.27f green:0.21f blue:0.05f alpha:1.00f],
[UIColor colorWithRed:0.47f green:0.75f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.08f green:0.51f blue:0.06f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.53f green:0.50f blue:0.53f alpha:1.00f],
[UIColor colorWithRed:0.08f green:0.51f blue:0.06f alpha:1.00f],
[UIColor colorWithRed:0.25f green:0.63f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.46f blue:0.45f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.02f green:0.17f blue:0.21f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.53f green:0.50f blue:0.53f alpha:1.00f],
[UIColor colorWithRed:0.02f green:0.17f blue:0.21f alpha:1.00f],
[UIColor colorWithRed:0.02f green:0.23f blue:0.27f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.53f green:0.50f blue:0.53f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.13f green:0.13f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.53f green:0.50f blue:0.53f alpha:1.00f],
[UIColor colorWithRed:0.24f green:0.22f blue:0.22f alpha:1.00f],
[UIColor colorWithRed:0.33f green:0.31f blue:0.32f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.87f green:0.22f blue:0.17f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.55f green:0.13f blue:0.15f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.53f green:0.50f blue:0.53f alpha:1.00f],
[UIColor colorWithRed:0.55f green:0.13f blue:0.15f alpha:1.00f],
[UIColor colorWithRed:0.71f green:0.16f blue:0.15f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.47f green:0.75f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.47f green:0.75f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.08f green:0.51f blue:0.06f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.53f green:0.50f blue:0.53f alpha:1.00f],
[UIColor colorWithRed:0.80f green:0.89f blue:0.71f alpha:1.00f],
[UIColor colorWithRed:0.92f green:0.95f blue:0.89f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.46f blue:0.45f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.46f blue:0.45f alpha:1.00f],
[UIColor colorWithRed:0.02f green:0.17f blue:0.21f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.53f green:0.50f blue:0.53f alpha:1.00f],
[UIColor colorWithRed:0.65f green:0.82f blue:0.80f alpha:1.00f],
[UIColor colorWithRed:0.86f green:0.93f blue:0.92f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.33f green:0.31f blue:0.32f alpha:1.00f],
[UIColor colorWithRed:0.33f green:0.31f blue:0.32f alpha:1.00f],
[UIColor colorWithRed:0.13f green:0.13f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.53f green:0.50f blue:0.53f alpha:1.00f],
[UIColor colorWithRed:0.83f green:0.82f blue:0.84f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.87f green:0.22f blue:0.17f alpha:1.00f],
[UIColor colorWithRed:0.87f green:0.22f blue:0.17f alpha:1.00f],
[UIColor colorWithRed:0.55f green:0.13f blue:0.15f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.53f green:0.50f blue:0.53f alpha:1.00f],
[UIColor colorWithRed:0.98f green:0.73f blue:0.74f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.93f blue:0.93f alpha:1.00f],
[UIColor colorWithRed:0.47f green:0.75f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.46f blue:0.45f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.00f blue:0.00f alpha:1.00f],
[UIColor colorWithRed:0.13f green:0.13f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.24f green:0.22f blue:0.22f alpha:1.00f],
[UIColor colorWithRed:0.33f green:0.31f blue:0.32f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.13f green:0.13f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.44f green:0.40f blue:0.42f alpha:1.00f],
[UIColor colorWithRed:0.63f green:0.61f blue:0.64f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.63f green:0.61f blue:0.64f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.13f green:0.13f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.15f green:0.66f blue:0.82f alpha:1.00f],
[UIColor colorWithRed:0.47f green:0.75f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.04f green:0.38f blue:0.11f alpha:1.00f],
[UIColor colorWithRed:0.87f green:0.22f blue:0.17f alpha:1.00f],
[UIColor colorWithRed:0.39f green:0.11f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.47f green:0.75f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.25f green:0.63f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:0.08f green:0.51f blue:0.06f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.25f green:0.63f blue:0.09f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.00f blue:0.00f alpha:1.00f],
[UIColor colorWithRed:0.13f green:0.13f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.13f green:0.13f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.13f green:0.13f blue:0.13f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.83f green:0.82f blue:0.84f alpha:1.00f],
[UIColor colorWithRed:0.83f green:0.82f blue:0.84f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.83f green:0.82f blue:0.84f alpha:1.00f],
[UIColor colorWithRed:0.53f green:0.50f blue:0.53f alpha:1.00f],
[UIColor colorWithRed:0.44f green:0.40f blue:0.42f alpha:1.00f],
[UIColor colorWithRed:0.44f green:0.40f blue:0.42f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.44f green:0.40f blue:0.42f alpha:1.00f],
[UIColor colorWithRed:0.01f green:0.37f blue:0.39f alpha:1.00f],
[UIColor colorWithRed:0.02f green:0.30f blue:0.33f alpha:1.00f],
[UIColor colorWithRed:0.02f green:0.30f blue:0.33f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.02f green:0.30f blue:0.33f alpha:1.00f],
[UIColor colorWithRed:0.87f green:0.22f blue:0.17f alpha:1.00f],
[UIColor colorWithRed:0.55f green:0.13f blue:0.15f alpha:1.00f],
[UIColor colorWithRed:0.55f green:0.13f blue:0.15f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.93f blue:0.94f alpha:1.00f],
[UIColor colorWithRed:0.55f green:0.13f blue:0.15f alpha:1.00f]
    ];
  });

  return colorArray;
}

@end
