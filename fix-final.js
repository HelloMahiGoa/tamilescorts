const fs = require('fs');

const files = [
    "src/app/nungambakkam-escorts/page.tsx",
    "src/app/t-nagar-escorts/page.tsx",
    "src/app/omr-escorts/page.tsx",
    "src/app/guindy-escorts/page.tsx",
    "src/app/adyar-escorts/page.tsx",
    "src/app/velachery-escorts/page.tsx",
    "src/app/egmore-escorts/page.tsx",
    "src/app/anna-nagar-escorts/page.tsx",
    "src/app/porur-escorts/page.tsx",
    "src/app/chrompet-escorts/page.tsx",
    "src/app/tambaram-escorts/page.tsx",
    "src/app/ecr-escorts/page.tsx",
    "src/app/koramangala-escorts/page.tsx",
    "src/app/indiranagar-escorts/page.tsx",
    "src/app/mg-road-escorts/page.tsx",
    "src/app/whitefield-escorts/page.tsx",
    "src/app/hsr-layout-escorts/page.tsx",
    "src/app/electronic-city-escorts/page.tsx",
    "src/app/jp-nagar-escorts/page.tsx",
    "src/app/marathahalli-escorts/page.tsx",
    "src/app/bellandur-escorts/page.tsx",
    "src/app/jayanagar-escorts/page.tsx",
    "src/app/ulsoor-escorts/page.tsx",
    "src/app/brigade-road-escorts/page.tsx"
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let buffer = fs.readFileSync(file);
        const originalBuffer = Buffer.from(buffer);
        
        // The pattern "â€"" is stored as: C3 A2 (â) E2 82 AC (€) E2 80 9C (")
        // We need to replace it with: E2 80 94 (em dash —)
        const badPattern = Buffer.from([0xC3, 0xA2, 0xE2, 0x82, 0xAC, 0xE2, 0x80, 0x9C]);
        const goodPattern = Buffer.from([0xE2, 0x80, 0x94]); // em dash
        
        let newBuffer = Buffer.alloc(0);
        let i = 0;
        let changed = false;
        
        while (i < buffer.length) {
            let found = false;
            if (i <= buffer.length - badPattern.length) {
                let match = true;
                for (let j = 0; j < badPattern.length; j++) {
                    if (buffer[i + j] !== badPattern[j]) {
                        match = false;
                        break;
                    }
                }
                if (match) {
                    newBuffer = Buffer.concat([newBuffer, goodPattern]);
                    i += badPattern.length;
                    found = true;
                    changed = true;
                }
            }
            if (!found) {
                newBuffer = Buffer.concat([newBuffer, Buffer.from([buffer[i]])]);
                i++;
            }
        }
        
        if (changed) {
            fs.writeFileSync(file, newBuffer);
            console.log(`Fixed byte-level encoding in: ${file}`);
        }
    }
});
