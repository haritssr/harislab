import LayoutGlobalNavigation from '@/components/LayoutGlobalNavigation';
import CTABanner from '@/components/CTABanner';

export default function Matematika() {
  return (
    <LayoutGlobalNavigation
      globalNavigationTitle='Matematika'
      browserTitle='Matematika'
      description='Mempelajari kegunaan dari Matematika pada feno mena-fenomena fisik di seluruh alam semesta.'
    >
      <CTABanner
        title='Butuh bimbingan belajar Matematika ke rumah?'
        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        CTA='Pesan Bimbel Matematika'
      />
    </LayoutGlobalNavigation>
  );
}
