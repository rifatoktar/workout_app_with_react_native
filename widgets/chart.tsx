import { View } from 'react-native';
import { LineChart } from "react-native-gifted-charts";

export default function ChartWidget() {

    const lineData = [{ value: 0 }, { value: 20 }, { value: 18 }, { value: 40 }, { value: 36 }, { value: 60 }, { value: 54 }, { value: 85 }];

    return (
        <View>
            <LineChart
                areaChart
                hideDataPoints
                isAnimated
                animationDuration={1200}
                startFillColor="#04ECA6"
                startOpacity={1}
                endOpacity={0.3}
                initialSpacing={0}
                data={lineData}
                spacing={30}
                thickness={2}
                hideRules
                hideYAxisText
                yAxisColor="transparent"
                //showVerticalLines
                //verticalLinesColor="rgba(14,164,164,0.5)"
                xAxisColor="transparent"
                color="#04ECA6"
            />
        </View>
    );
};