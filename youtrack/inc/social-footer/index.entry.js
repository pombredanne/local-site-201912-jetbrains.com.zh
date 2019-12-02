import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    formData={{
      id: 1477,
      name: 'YouTrack',
      newsletter: 'JB_YT_Newsletter'
    }}
    socialLinks={[
      {
        href: '//youtrack-support.jetbrains.com/hc/en-us/community/topics/',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/JT',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/youtrack/',
        type: 'blog',
        text: i18n._(t`YouTrack blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/youtrack',
        type: 'twitter',
        text: i18n._(t`@YouTrack on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
