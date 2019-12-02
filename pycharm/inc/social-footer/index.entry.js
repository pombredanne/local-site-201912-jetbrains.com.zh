import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    formData={{
      id: 1468,
      name: 'PyCharm',
      newsletter: 'JB_PC_Newsletter'
    }}
    socialLinks={[
      {
        href:
          '//intellij-support.jetbrains.com/hc/en-us/community/topics/200379535-PyCharm',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/PY',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/pycharm/',
        type: 'blog',
        text: i18n._(t`PyCharm blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/pycharm',
        type: 'twitter',
        text: i18n._(t`@PyCharm on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
