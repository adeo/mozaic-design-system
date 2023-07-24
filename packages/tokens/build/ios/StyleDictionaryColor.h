
//
// StyleDictionaryColor.h
//

#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBadgeInfoBackground,
ColorBadgeInfoBorder,
ColorBadgeInfoText,
ColorBadgeSuccessBackground,
ColorBadgeSuccessBorder,
ColorBadgeSuccessText,
ColorBadgeWarningBackground,
ColorBadgeWarningBorder,
ColorBadgeWarningText,
ColorBadgeDangerBackground,
ColorBadgeDangerBorder,
ColorBadgeDangerText,
ColorBadgeNeutralBackground,
ColorBadgeNeutralBorder,
ColorBadgeNeutralText,
ColorPrimary01100,
ColorPrimary01200,
ColorPrimary01300,
ColorPrimary01400,
ColorPrimary01500,
ColorPrimary01600,
ColorPrimary01700,
ColorPrimary01800,
ColorPrimary01900,
ColorPrimary02100,
ColorPrimary02200,
ColorPrimary02300,
ColorPrimary02400,
ColorPrimary02500,
ColorPrimary02600,
ColorPrimary02700,
ColorPrimary02800,
ColorPrimary02900,
ColorGrey100,
ColorGrey200,
ColorGrey300,
ColorGrey400,
ColorGrey500,
ColorGrey600,
ColorGrey700,
ColorGrey800,
ColorGrey900,
ColorGrey999,
ColorGrey000,
ColorSecondaryBlue100,
ColorSecondaryBlue200,
ColorSecondaryBlue300,
ColorSecondaryBlue400,
ColorSecondaryBlue500,
ColorSecondaryBlue600,
ColorSecondaryBlue700,
ColorSecondaryBlue800,
ColorSecondaryBlue900,
ColorSecondaryGreen100,
ColorSecondaryGreen200,
ColorSecondaryGreen300,
ColorSecondaryGreen400,
ColorSecondaryGreen500,
ColorSecondaryGreen600,
ColorSecondaryGreen700,
ColorSecondaryGreen800,
ColorSecondaryGreen900,
ColorSecondaryPurple100,
ColorSecondaryPurple200,
ColorSecondaryPurple300,
ColorSecondaryPurple400,
ColorSecondaryPurple500,
ColorSecondaryPurple600,
ColorSecondaryPurple700,
ColorSecondaryPurple800,
ColorSecondaryPurple900,
ColorSecondaryRed100,
ColorSecondaryRed200,
ColorSecondaryRed300,
ColorSecondaryRed400,
ColorSecondaryRed500,
ColorSecondaryRed600,
ColorSecondaryRed700,
ColorSecondaryRed800,
ColorSecondaryRed900,
ColorSecondaryOrange100,
ColorSecondaryOrange200,
ColorSecondaryOrange300,
ColorSecondaryOrange400,
ColorSecondaryOrange500,
ColorSecondaryOrange600,
ColorSecondaryOrange700,
ColorSecondaryOrange800,
ColorSecondaryOrange900,
ColorSecondaryYellow100,
ColorSecondaryYellow200,
ColorSecondaryYellow300,
ColorSecondaryYellow400,
ColorSecondaryYellow500,
ColorSecondaryYellow600,
ColorSecondaryYellow700,
ColorSecondaryYellow800,
ColorSecondaryYellow900,
ColorDanger100,
ColorDanger200,
ColorDanger300,
ColorDanger400,
ColorDanger500,
ColorDanger600,
ColorDanger700,
ColorDanger800,
ColorDanger900,
ColorInfo100,
ColorInfo200,
ColorInfo300,
ColorInfo400,
ColorInfo500,
ColorInfo600,
ColorInfo700,
ColorInfo800,
ColorInfo900,
ColorWarning100,
ColorWarning200,
ColorWarning300,
ColorWarning400,
ColorWarning500,
ColorWarning600,
ColorWarning700,
ColorWarning800,
ColorWarning900,
ColorSuccess100,
ColorSuccess200,
ColorSuccess300,
ColorSuccess400,
ColorSuccess500,
ColorSuccess600,
ColorSuccess700,
ColorSuccess800,
ColorSuccess900,
ColorBreadcrumbArrow,
ColorBreadcrumbArrowInvert,
ColorButtonSolidBackground,
ColorButtonSolidFont,
ColorButtonSolidFocusBorder,
ColorButtonSolidDisabledBackground,
ColorButtonSolidDisabledFont,
ColorButtonSolidActiveBackground,
ColorButtonSolidHoverBackground,
ColorButtonSolidHoverFont,
ColorButtonSolidPrimary02Background,
ColorButtonSolidPrimary02Font,
ColorButtonSolidPrimary02FocusBorder,
ColorButtonSolidPrimary02DisabledBackground,
ColorButtonSolidPrimary02DisabledFont,
ColorButtonSolidPrimary02ActiveBackground,
ColorButtonSolidPrimary02HoverBackground,
ColorButtonSolidPrimary02HoverFont,
ColorButtonSolidNeutralBackground,
ColorButtonSolidNeutralFont,
ColorButtonSolidNeutralFocusBorder,
ColorButtonSolidNeutralDisabledBackground,
ColorButtonSolidNeutralDisabledFont,
ColorButtonSolidNeutralActiveBackground,
ColorButtonSolidNeutralHoverBackground,
ColorButtonSolidNeutralHoverFont,
ColorButtonSolidDangerBackground,
ColorButtonSolidDangerFont,
ColorButtonSolidDangerFocusBorder,
ColorButtonSolidDangerDisabledBackground,
ColorButtonSolidDangerDisabledFont,
ColorButtonSolidDangerActiveBackground,
ColorButtonSolidDangerHoverBackground,
ColorButtonSolidDangerHoverFont,
ColorButtonBorderedBackground,
ColorButtonBorderedBorder,
ColorButtonBorderedFont,
ColorButtonBorderedFocusBorder,
ColorButtonBorderedDisabledBackground,
ColorButtonBorderedDisabledFont,
ColorButtonBorderedActiveBackground,
ColorButtonBorderedActiveFont,
ColorButtonBorderedHoverBackground,
ColorButtonBorderedHoverFont,
ColorButtonBorderedPrimary02Background,
ColorButtonBorderedPrimary02Border,
ColorButtonBorderedPrimary02Font,
ColorButtonBorderedPrimary02FocusBorder,
ColorButtonBorderedPrimary02DisabledBackground,
ColorButtonBorderedPrimary02DisabledFont,
ColorButtonBorderedPrimary02ActiveBackground,
ColorButtonBorderedPrimary02HoverBackground,
ColorButtonBorderedNeutralBackground,
ColorButtonBorderedNeutralBorder,
ColorButtonBorderedNeutralFont,
ColorButtonBorderedNeutralFocusBorder,
ColorButtonBorderedNeutralDisabledBackground,
ColorButtonBorderedNeutralDisabledFont,
ColorButtonBorderedNeutralActiveBackground,
ColorButtonBorderedNeutralHoverBackground,
ColorButtonBorderedDangerBackground,
ColorButtonBorderedDangerBorder,
ColorButtonBorderedDangerFont,
ColorButtonBorderedDangerFocusBorder,
ColorButtonBorderedDangerDisabledBackground,
ColorButtonBorderedDangerDisabledFont,
ColorButtonBorderedDangerActiveBackground,
ColorButtonBorderedDangerActiveFont,
ColorButtonBorderedDangerHoverBackground,
ColorButtonBorderedDangerHoverFont,
ColorCardBorderedBackground,
ColorCardBorderedBorder,
ColorDatatableFiltersBorder,
ColorDatatableContainerBackground,
ColorDatatableTheadFont,
ColorDatatableSortArrowDefault,
ColorDatatableSortArrowActive,
ColorDatatableCellFont,
ColorDatatableCellBackgroundHover,
ColorDatatableCellBackgroundSelected,
ColorDatatableSubtableBackground,
ColorDatatableSubtableBorder,
ColorDatatableSubtableFont,
ColorDatatableIcon,
ColorDatatableEmptyBackground,
ColorDatatableEmptyColor,
ColorDialogBackground,
ColorDialogIcon,
ColorDialogClose,
ColorDialogFooterShadow,
ColorDividerLightest,
ColorDividerLight,
ColorDividerDefault,
ColorDividerDark,
ColorFieldsError,
ColorFieldsLabel,
ColorFieldsRequirement,
ColorFieldsHelp,
ColorFileuploaderFont,
ColorFileuploaderFilesList,
ColorFileuploaderFilesDelete,
ColorFileuploaderValid,
ColorFileuploaderAlert,
ColorFlagSolidBackground,
ColorFlagSolidBorder,
ColorFlagSolidText,
ColorFlagSolidPrimary02Background,
ColorFlagSolidPrimary02Border,
ColorFlagSolidPrimary02Text,
ColorFlagSolidDarkBackground,
ColorFlagSolidDarkBorder,
ColorFlagSolidDarkText,
ColorFlagSolidLightBackground,
ColorFlagSolidLightBorder,
ColorFlagSolidLightText,
ColorFlagSolidDangerBackground,
ColorFlagSolidDangerBorder,
ColorFlagSolidDangerText,
ColorFlagBorderedBackground,
ColorFlagBorderedBorder,
ColorFlagBorderedText,
ColorFlagBorderedPrimary02Background,
ColorFlagBorderedPrimary02Border,
ColorFlagBorderedPrimary02Text,
ColorFlagBorderedDarkBackground,
ColorFlagBorderedDarkBorder,
ColorFlagBorderedDarkText,
ColorFlagBorderedLightBackground,
ColorFlagBorderedLightBorder,
ColorFlagBorderedLightText,
ColorFlagBorderedDangerBackground,
ColorFlagBorderedDangerBorder,
ColorFlagBorderedDangerText,
ColorFocusGap,
ColorFocusBorder,
ColorFontPrimary01,
ColorFontPrimary02,
ColorFontDarkest,
ColorFontDarker,
ColorFontDark,
ColorFontLight,
ColorFontLightest,
ColorFontInfo,
ColorFontSuccess,
ColorFontWarning,
ColorFontDanger,
ColorHeadingUnderlineDefault,
ColorHeadingUnderlineLightest,
ColorHeroCoverBackground,
ColorInputText,
ColorInputBorder,
ColorInputPlaceholder,
ColorInputBackground,
ColorInputDisabledBackground,
ColorInputDisabledBorder,
ColorInputDisabledIcon,
ColorInputDisabledLabel,
ColorInputHoverBorder,
ColorInputFocusBorder,
ColorInputValidBorder,
ColorInputValidHoverBorder,
ColorInputInvalidBorder,
ColorInputInvalidHoverBorder,
ColorInputCheckedBorder,
ColorInputCheckedBackground,
ColorInputCheckedIcon,
ColorInputCheckedHoverBorder,
ColorLinkDarkBase,
ColorLinkDarkVisited,
ColorLinkDarkActive,
ColorLinkDarkDisabled,
ColorLinkDarkHover,
ColorLinkLightBase,
ColorLinkLightVisited,
ColorLinkLightActive,
ColorLinkLightDisabled,
ColorLinkLightHover,
ColorLinkPrimaryBase,
ColorLinkPrimaryVisited,
ColorLinkPrimaryActive,
ColorLinkPrimaryDisabled,
ColorLinkPrimaryHover,
ColorLinkPrimary02Base,
ColorLinkPrimary02Visited,
ColorLinkPrimary02Active,
ColorLinkPrimary02Disabled,
ColorLinkPrimary02Hover,
ColorLinkDangerBase,
ColorLinkDangerVisited,
ColorLinkDangerActive,
ColorLinkDangerDisabled,
ColorLinkDangerHover,
ColorListboxBackground,
ColorListboxBorder,
ColorListboxTileBorder,
ColorListboxTileShadow,
ColorListboxTileHoverBackground,
ColorListboxDisabledBackground,
ColorNotificationFont,
ColorNotificationInformationBackground,
ColorNotificationInformationBorder,
ColorNotificationInformationIcon,
ColorNotificationSuccessBackground,
ColorNotificationSuccessBorder,
ColorNotificationSuccessIcon,
ColorNotificationWarningBackground,
ColorNotificationWarningBorder,
ColorNotificationWarningIcon,
ColorNotificationDangerBackground,
ColorNotificationDangerBorder,
ColorNotificationDangerIcon,
ColorOptionButtonLabelShadow,
ColorOptionButtonHoverLabelShadow,
ColorOptionButtonCheckedLabelBorder,
ColorOptionButtonCheckedLabelShadow,
ColorOptionButtonDisabledLabelBackground,
ColorOptionCardLabelShadow,
ColorOptionCardHoverLabelShadow,
ColorOptionCardCheckedLabelBorder,
ColorOptionCardCheckedLabelShadow,
ColorOptionCardDisabledContent,
ColorOptionCardDisabledLabel,
ColorOverlayBackground,
ColorOverlayLoaderBackground,
ColorPasswordInputButtonHoverBackground,
ColorPhoneNumberButtonBorder,
ColorPhoneNumberListBackground,
ColorPhoneNumberItemBorder,
ColorPhoneNumberItemFocusBackground,
ColorProgressBackground,
ColorProgressIndicator,
ColorProgressPercentageDefault,
ColorProgressPercentageHalf,
ColorSegmentedControlIsActive,
ColorSegmentedControlHover,
ColorSegmentedControlActive,
ColorSidebarBackground,
ColorSidebarFeatureBackground,
ColorSidebarFeatureHoverBackground,
ColorSidebarFeatureSelectedBackground,
ColorSidebarFeatureDisabledBackground,
ColorSidebarUserBackground,
ColorSidebarDividerBackground,
ColorSidebarIcon,
ColorSidebarTextBackground,
ColorSidebarTextColor,
ColorSidebarScrollBackground,
ColorSidebarScrollColor,
ColorStarEmpty,
ColorStarFocus,
ColorStarFull,
ColorStarHover,
ColorStepperItemBackground,
ColorStepperItemCurrentBackground,
ColorStepperLinkHoverText,
ColorStepperIndicatorBackground,
ColorStepperIndicatorBorder,
ColorStepperIndicatorCurrentBackground,
ColorStepperIndicatorCurrentBorder,
ColorStepperIcon,
ColorStepperTitle,
ColorTabsBackground,
ColorTabsShadow,
ColorTabsDefault,
ColorTabsElementBackground,
ColorTabsHover,
ColorTabsDisabledBackground,
ColorTabsActiveBackground,
ColorTabsActiveText,
ColorTabsSelectedBorder,
ColorTabsSelectedText,
ColorTabsActiveDisabled,
ColorTagTextLightBackground,
ColorTagTextLightBorder,
ColorTagTextLightText,
ColorTagTextDarkBackground,
ColorTagTextDarkBorder,
ColorTagTextDarkText,
ColorTagLinkLightBackground,
ColorTagLinkLightBorder,
ColorTagLinkLightText,
ColorTagLinkLightHoverBackground,
ColorTagLinkLightActiveBackground,
ColorTagLinkDarkBackground,
ColorTagLinkDarkBorder,
ColorTagLinkDarkText,
ColorTagLinkDarkHoverBackground,
ColorTagLinkDarkActiveBackground,
ColorTagSelectableLightBackground,
ColorTagSelectableLightBorder,
ColorTagSelectableLightText,
ColorTagSelectableLightHoverBackground,
ColorTagSelectableLightActiveBackground,
ColorTagSelectableLightActiveBorder,
ColorTagSelectableLightActiveText,
ColorTagSelectableLightDisabledBackground,
ColorTagSelectableLightDisabledText,
ColorTagSelectableLightSelectedBackground,
ColorTagSelectableLightSelectedText,
ColorTagSelectableLightSelectedHoverBackground,
ColorTagSelectableDarkBackground,
ColorTagSelectableDarkBorder,
ColorTagSelectableDarkText,
ColorTagSelectableDarkHoverBackground,
ColorTagSelectableDarkActiveBackground,
ColorTagSelectableDarkActiveBorder,
ColorTagSelectableDarkActiveText,
ColorTagSelectableDarkSelectedBackground,
ColorTagSelectableDarkSelectedBorder,
ColorTagSelectableDarkSelectedText,
ColorTagSelectableDarkSelectedHoverBackground,
ColorTagSelectableDarkDisabledBackground,
ColorTagSelectableDarkDisabledText,
ColorTagRemovableLightBackground,
ColorTagRemovableLightText,
ColorTagRemovableLightIcon,
ColorTagRemovableLightHoverBackground,
ColorTagRemovableLightActiveBackground,
ColorTagRemovableDarkBackground,
ColorTagRemovableDarkText,
ColorTagRemovableDarkIcon,
ColorTagRemovableDarkHoverBackground,
ColorTagRemovableDarkActiveBackground,
ColorToggleLabel,
ColorToggleOffBackground,
ColorToggleOffCircle,
ColorToggleOnBackground,
ColorToggleOnCircle,
ColorToggleHoverCircle,
ColorToggleDisabledBackground,
ColorToggleDisabledCircle,
ColorToggleDisabledLabel,
ColorToggleDisabledCheckedBackground,
ColorToggleDisabledCheckedCircle,
ColorTooltipBackground,
ColorTooltipBorder
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
