import 'react-native-gesture-handler/jestSetup';
import {setUpTests} from 'react-native-reanimated';

setUpTests();

import {jest} from '@jest/globals';

// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/src/private/animated/NativeAnimatedHelper');
