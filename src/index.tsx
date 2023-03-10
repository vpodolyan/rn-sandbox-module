import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'rn-sandbox-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const RnSandboxModule = NativeModules.RnSandboxModule
  ? NativeModules.RnSandboxModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return RnSandboxModule.multiply(a, b);
}

export function changeText(
  value: string,
  onChangeText?: (value: string) => void
) {
  RnSandboxModule.changeText(value, onChangeText);
}

export { Label as SandboxLabel } from './Label';
