import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    formData={{
      id: 1465,
      name: 'Community Newsletter',
      newsletter: 'sendCommunityNewsletter',
      title: i18n._(t`Subscribe to the monthly JetBrains Newsletter`)
    }}
    socialLinks={[
      {
        href: '//youtrack.jetbrains.com/issues/TBX',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/blog/tag/jetbrains-toolbox/',
        type: 'blog',
        text: i18n._(t`JetBrains Blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/JBToolbox',
        type: 'twitter',
        text: i18n._(t`@JBToolbox on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
