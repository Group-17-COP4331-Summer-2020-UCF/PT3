// ...

import com.BV.LinearGradient.LinearGradientPackage; // <--- This!

// ...

@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
    new MainReactPackage(),
    new LinearGradientPackage() // <---- and This!
  );
}