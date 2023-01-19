package com.rnsandboxmodule;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.bridge.Callback;

@ReactModule(name = RnSandboxModuleModule.NAME)
public class RnSandboxModuleModule extends ReactContextBaseJavaModule {
  public static final String NAME = "RnSandboxModule";

  public RnSandboxModuleModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void changeText(String value, Callback onChangeText) {
      onChangeText.invoke(null, value);
  }
}
