import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    formData={{
      id: 1630,
      name: 'AppCode',
      newsletter: 'JB_AC_Newsletter'
    }}
    socialLinks={[
      {
        href:
          '//intellij-support.jetbrains.com/hc/en-us/community/topics/200379545-AppCode',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/OC',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/objc/',
        type: 'blog'
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/appcode',
        type: 'twitter',
        text: i18n._(t`@AppCode on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
