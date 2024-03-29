import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    formData={{
      id: 2524,
      name: 'Rider',
      newsletter: 'riderNewsletter',
      title: i18n._(t`Subscribe me to Rider product news`)
    }}
    socialLinks={[
      {
        href: '//rider-support.jetbrains.com/hc/en-us/community/topics',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/rider',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/dotnet/',
        type: 'blog',
        text: i18n._(t`.NET Tools blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/JetBrainsRider',
        type: 'twitter',
        text: i18n._(t`@JetBrainsRider on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
