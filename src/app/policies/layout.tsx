import classes from './layout.module.css';

interface InformationProps {
  children: React.ReactNode;
}

export default function policiesLayout({ children }: InformationProps) {
    return (
        <main className={classes.policiesMain}>
            {children}
        </main>
    );
}