import Link from "next/link";

export default function FooterSection() {
  return (
    <p>
      Don't have an account?{" "}
      <Link className="font-bold" href="/boards">
        Sign up
      </Link>
    </p>
  );
}
