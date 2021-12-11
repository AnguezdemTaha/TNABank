import * as React from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import TabBar from './TabBar';
import Colors from '../Constants/Colors';

type ScreenType = { title: string; view: any; params: any };
type TabsProps = {
    color?: 'accent' | 'primary' | 'error' | '#453212';
    uncheckedColor?: string;
    screens?: any;
};
export type Props = TabsProps;

const Tabs: React.FC<Props> = (props: Props) => {
  const { color = Colors.secondary, uncheckedColor= Colors.white, screens } = props;

  const [index, setIndex] = React.useState(0);

  const routes = screens.map((screen: ScreenType) => {
    return {
      key: screens.indexOf(screen),
      title: screen.title,
      params: screen.params,
    };
  });

  console.log('routes :', routes);

  const handleIndexChange = (indexChanged: number) => setIndex(indexChanged);

  const renderScreens = screens.reduce(
    (o: ScreenType, key: ScreenType) => ({
      ...o,
      [screens.indexOf(key)]: key.view,
    }),
    {},
  );

  const renderScene = SceneMap(renderScreens);

  const renderTabBar = (renderProps: any) => {
    return (
            <TabBar
                renderProps={renderProps}
                uncheckedColor={uncheckedColor}
                color={color}
                value={index}
                screens={screens}
                setValue={(indexChosen: number) => setIndex(indexChosen)}
            />
    );
  };

  return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={handleIndexChange}
        />
  );
};

export default Tabs;
