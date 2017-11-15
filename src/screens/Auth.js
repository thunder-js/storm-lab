import React from 'react';
import { compose } from 'recompose'
import Auth from '../../lib/storm-auth/src/components/Auth'
import SignInForm from '../../lib/storm-auth/src/components/SignInForm'
import SignUpForm from '../../lib/storm-auth/src/components/SignUpForm'
import graphcoolSignInWithEmail from '../../lib/storm-auth/src/hocs/graphcool/sign-in-email'
import graphcoolSignInWithFacebook from '../../lib/storm-auth/src/hocs/graphcool/sign-in-facebook'
import graphcoolSignUp from '../../lib/storm-auth/src/hocs/graphcool/sign-up'
import ScreenWrapper from '../../lib/storm-common/src/components/ScreenWrapper'

const SignInFormContainer = compose(
  graphcoolSignInWithEmail(),
  graphcoolSignInWithFacebook(['public_profile', 'email']),
)(SignInForm)
const SignUpFormContainer = compose(
  graphcoolSignUp(),
)(SignUpForm)


class AuthScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true,
  }
  handleClose = () => {
    this.props.navigator.dismissModal({
      animationType: 'slide-down',
    });
  }
  render() {
    return (
      <ScreenWrapper>
        <Auth
          backgroundImageSource={{ uri: 'https://unsplash.it/600x1200' }}
          logoSource={{ uri: 'https://unsplash.it/400x400' }}
          signInContainer={<SignInFormContainer
            onSuccessEmail={() => alert('Success Email')}
            onSuccessFacebook={() => alert('Success Facebook')}
          />
          }
          signUpContainer={<SignUpFormContainer
            onSuccess={() => alert('Success Sign Up')}
          />
          }
          onClose={this.handleClose}
        />
      </ScreenWrapper>
    );
  }
}

export default AuthScreen;
