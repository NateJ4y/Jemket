export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export class NavigationController {
  private static instance: NavigationController;

  public readonly navLinks: NavLinkItem[] = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'why-us', label: 'Why Jemket', href: '#why-us' },
    { id: 'process', label: 'How it works', href: '#process' },
    { id: 'quote', label: 'Enquire', href: '#quote' },
  ];

  public static getInstance(): NavigationController {
    if (!NavigationController.instance) {
      NavigationController.instance = new NavigationController();
    }
    return NavigationController.instance;
  }

  public scrollToSection(targetId: string, headerOffset: number = 88): void {
    const cleanId = targetId.replace(/^#/, '');
    const element = document.getElementById(cleanId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
