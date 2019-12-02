import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    formData={{
      id: 1470,
      name: 'WebStorm',
      newsletter: 'JB_WS_Newsletter'
    }}
    socialLinks={[
      {
        href:
          '//intellij-support.jetbrains.com/hc/en-us/community/topics/200367229-WebStorm',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/WEB',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/webstorm/',
        type: 'blog',
        text: i18n._(t`WebStorm blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/webstormide',
        type: 'twitter',
        text: i18n._(t`@WebStormIDE on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
