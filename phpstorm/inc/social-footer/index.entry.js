import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    formData={{
      id: 1467,
      name: 'PhpStorm',
      newsletter: 'JB_PS_Newsletter'
    }}
    socialLinks={[
      {
        href:
          '//intellij-support.jetbrains.com/hc/en-us/community/topics/200367219-PhpStorm',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/WI',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/phpstorm/',
        type: 'blog',
        text: i18n._(t`PhpStorm blog`)
      },
      {
        href: '//plugins.jetbrains.com/phpstorm',
        type: 'plugin'
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/phpstorm',
        type: 'twitter',
        text: i18n._(t`@PhpStorm on Twitter`)
      },
      {
        href: '//www.facebook.com/PhpStorm/',
        type: 'facebook'
      },
      {
        href: '/phpstorm/documentation/phpstorm-video-tutorials.html',
        type: 'youtube'
      }
    ]}
  />,
  'social-footer'
);
