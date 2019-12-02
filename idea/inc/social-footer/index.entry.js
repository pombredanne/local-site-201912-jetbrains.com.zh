import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

export const IdeaSocialFooter = () => (
  <SocialFooter
    formData={{
      id: 1466,
      name: 'IntelliJIDEA',
      newsletter: 'JB_II_Newsletter'
    }}
    socialLinks={[
      {
        href: '//intellij-support.jetbrains.com/hc/en-us/community/topics',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/IDEA',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/idea',
        type: 'blog',
        text: i18n._(t`IntelliJ IDEA blog`)
      },
      {
        href: '//plugins.jetbrains.com/idea',
        type: 'plugin'
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/IntelliJIDEA',
        type: 'twitter',
        text: i18n._(t`@IntelliJIDEA on Twitter`)
      },
      {
        href: '//facebook.com/IntelliJIDEA',
        type: 'facebook'
      },
      {
        href: '//www.youtube.com/channel/UC4ogdcPcIAOOMJktgBMhQnQ',
        type: 'youtube'
      }
    ]}
  />
);

safeReactRender(<IdeaSocialFooter />, 'social-footer');
