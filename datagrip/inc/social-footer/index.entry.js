import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    formData={{
      id: 1543,
      name: 'DataGrip',
      newsletter: 'xDBENewsletter'
    }}
    socialLinks={[
      {
        href:
          '//intellij-support.jetbrains.com/hc/en-us/community/topics/200381555-DataGrip',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/DBE',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/datagrip/',
        type: 'blog',
        text: i18n._(t`DataGrip blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/datagrip',
        type: 'twitter',
        text: i18n._(t`@DataGrip on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
