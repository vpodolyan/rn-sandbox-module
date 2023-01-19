@objc(RnSandboxModule)
class RnSandboxModule: NSObject {

  @objc func changeText(_ value: String, onChangeText: @escaping RCTResponseSenderBlock) -> Void {
    onChangeText([value])
  }
}
