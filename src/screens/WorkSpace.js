import React from 'react'
import { View, Text } from 'react-native'
import SelectableCard from 'storm-widgets/src/components/SelectableCard'
import Gradient from 'storm-common/src/components/Gradient'
import PictureInput from 'storm-widgets/src/components/PictureInput'

class WorkSpace extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
    }
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 22 }}>
        <Gradient
          colors={['red', 'blue']}
          style={{ width: 100, height: 100 }}
        />
        <PictureInput
          uploading={false}
          success={false}
          colors={['red', 'blue']}
          placeholderImageSource={{ uri: 'https://placehold.it/300x300' }}
          selectImage={() => alert('select image')}
          selectImage={() => alert('start upload')}
          progress={0}
          confirmButtonColor={'green'}
          changePictureColor={'yellow'}
        />

        {/* <SelectableCard
          imageSource={{ uri: 'https://cdn.dribbble.com/users/6356/screenshots/1280637/flat-dog.png' }}
          color={'tomato'}
          selected={this.state.selected}
          label={'Uma opção'}
          onChange={selected => this.setState({ selected })}
        />
        <SelectableCard
          imageSource={{ uri: 'https://cdn.dribbble.com/users/6356/screenshots/1280637/flat-dog.png' }}
          color={'tomato'}
          selected={this.state.selected}
          label={'Uma opção'}
          onChange={selected => this.setState({ selected })}
        /> */}
        {/* <StepForm
          steps={[1, 2, 3]}
          onFinish={() => alert('finish')}
          renderStep={step => (
            <Text style={{ color: '#FFF', fontSize: 50 }}>
              {step}
            </Text>
          )}
        /> */}
      </View>
    )
  }
}
WorkSpace.navigatorStyle = {
  navBarHidden: true,
}
export default WorkSpace
