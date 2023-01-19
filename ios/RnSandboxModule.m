#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RnSandboxModule, NSObject)

RCT_EXTERN_METHOD(changeText:(NSString *)value onChangeText: (RCTResponseSenderBlock))

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
