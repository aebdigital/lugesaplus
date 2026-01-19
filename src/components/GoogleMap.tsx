export default function GoogleMap() {
    return (
        <div className="w-full h-[400px] bg-gray-100 relative">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.284240409748!2d18.39634991565551!3d48.39164997924466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3ee43ec2163b%3A0x6b772c78572166!2sTeheln%C3%A1%2044%2C%20953%2001%20Zlat%C3%A9%20Moravce!5e0!3m2!1ssk!2ssk!4v1642444555555!5m2!1ssk!2ssk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-300"
            />
        </div>
    );
}
