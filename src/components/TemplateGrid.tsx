export default function TemplateGrid({ children }: { children: React.ReactNode }) {
	return <div className="grid grid-cols-1 lg:grid-cols-6 h-screen w-full">{children}</div>;
}
